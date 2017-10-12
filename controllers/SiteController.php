<?php

namespace app\controllers;

use app\models\Image;
use app\models\Images;
use app\models\Texts;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Post;
use yii\helpers\Html;
use app\models\User;
use app\models\MailerForm; //добавляемая строка
use yii\web\UploadedFile;



class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['about'],
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
                'denyCallback' => function ($rule, $action) {
                    return 'vvv';
                },
            ]
        ];
    }

    public function beforeAction($action)
    {
        $url=substr($_SERVER['REQUEST_URI'],0,6);
        if(substr($_SERVER['REQUEST_URI'],0,10)=='/web/admin'||substr($_SERVER['REQUEST_URI'],0,6)=='/admin'){
            if(!Yii::$app->user->isGuest){
                if(Yii::$app->user->identity=='admin'){
                    $a='admin';
                }
                else{
                    $a='user';
                }
            }
            else{
                header("HTTP/1.1 401 Unauthorized");
                $this->redirect('/login-form',301);
                return false;
            }
        }
        return true;
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }
    public function actionGetPostList(){
        if($_GET['index']){
            $index=$_GET['index'];
        }
        else{
            $index=0;
        }
        return json_encode(Post::find()->where('id > '.$index)->asArray()->orderBy('id')->limit(5)->all());
    }

    public function actionGetUserList(){
        return json_encode(User::find()->where('id > '.$_GET['index'])->asArray()->orderBy('id')->limit(5)->all());
    }

    public function actionGetPost(){

            $url=$_SERVER['REQUEST_URI'];
            $url=substr($url,5);
            $total=Post::find()->where('url = :url',[':url' => $url])->asArray()->one();
            if($total){
                    return json_encode($total);
            }
            Yii::$app->response->statusCode = 404;
            return null;

    }

    public function actionIndex()
    {
        $url=$_SERVER['REQUEST_URI'];
        $url=substr($url,1);
        $total=Post::find()->where('url = :url',[':url' => $url])->asArray()->one();
        if(!$total){
            Yii::$app->response->statusCode = 404;
            setcookie("status", 404);
        }
        return $this->render('index');
    }


    public function actionAbout()
    {
        return $this->render('about');
    }
    public function actionCsrf(){


        return $this->render('form');
    }

    public function actionLogin(){
        if(Yii::$app->user->isGuest){
            $identity=User::find()->where(['email' => $_POST['email']])->one();
            if($identity){
                $password=$_POST['password'];
                $hash=$identity->password;
                if(Yii::$app->getSecurity()->validatePassword($password, $hash)){
                    Yii::$app->user->login($identity,$duration = 10000);
                    return 'Успешная авторизация';
                }
                return 'Неверный пароль';
            }
            else{
                return 'Пользователь не найден';
            }
        }
        return 'Пользователь уже авторизирован';
    }
    public function actionRegistration(){
        $model = User::find()->where(['email' => $_POST['email']])->one();

        if (!$model) {

            $image= new Image();
            $imageUrl=$image->saveImage("image","smallImage");

            $user = new User();
            $user->name = $_POST['name'];
            $user->email = $_POST['email'];
            $user->status = 'user';
            $user->image = $imageUrl;
            $user->password = Yii::$app->getSecurity()->generatePasswordHash($_POST['password']);//VREMENNO
            if ($user->save()) {
                $user->emailConfirm();
                return 'ok';
            }
        }
        return 'Пользователь с таким email уже зарегистрирован';
    }
    public function actionLoginTest(){
        if(Yii::$app->user->isGuest){
            return null;
        }
        return json_encode(array('name' => Yii::$app->user->identity->name));
    }

    public function actionBanUser(){
        $user=new User();
        $userForDelete=$user->findOne($_GET['id']);
        $userForDelete->status='banned';
        $userForDelete->save();
        return 'ok';
    }
    public function actionGetImage(){
        return '5';
    }
    public function actionGetStatus(){
        if(Yii::$app->user->isGuest){
            return 'guest';
        }
        else{
            $ggg=Yii::$app->user->identity->status;
            if(Yii::$app->user->identity->status==='admin'){
                return 'admin';
            }
            else{
                return 'user';
            }
        }
    }
    public function actionCreateNewPost(){
        $keyArray=json_decode($_POST['keyArray']);
        $post=new Post();
        $index=1;
        $test=Yii::$app->user->identity->name;
        foreach($keyArray as $item){
            if(isset($_POST[$item])){
                $textElement=json_decode($_POST[$item]);
                if($textElement->type=='h1'){
                    $post->header=$textElement->value;
                    $post->url='url';

                    $post->author=Yii::$app->user->identity->name;
                    $post->save();
                    $a=10;
                }
                else{
                    $texts= new Texts();
                    $texts->value=$textElement->value;
                    $texts->type=$textElement->type;
                    $texts->post_id=$post->id;
                    $texts->number=$index;
                    $index++;
                    $texts->save();
                }

//                $texts->value = $textElement[]
            }
            else if(isset($_FILES[$item])){
                $images= new Images();
                $images->post_id=$post->id;
                $images->number=$index;
                $index++;
                $image=new Image();
                $imageName=$image->saveImage($item,'s'.$item);
                $images->name=$imageName;
                $post->image=$imageName;
                $images->save();
                $post->save();
            }
            else{
                return 'error';
            }
        }
        return 'ok';
    }
}
