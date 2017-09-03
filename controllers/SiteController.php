<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Post;


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
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
            'layoutFilter' => [
                'class' => LayoutFilter::className(),
            ]
        ];
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
    public function actionGet(){
        return json_encode(Post::find()->where('id > '.$_GET['index'])->asArray()->orderBy('id')->limit(5)->all());
    }

    public function actionIndex()
    {
        return $this->render('index');
    }


    public function actionAbout()
    {
        return $this->render('about');
    }
    public function actionInika(){
        $data=array(new Post('cms',
            '555555555Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt dolorem eos et iure laboriosam magni modi quas quos ratione, temporibus, totam velit. Asperiores commodi expedita minus perspiciatis quos ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor eos expedita iste neque nesciunt quas quisquam soluta. Culpa cupiditate debitis dicta dignissimos, eius fugit harum nulla placeat quasi soluta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium quo ullam! Asperiores corporis doloremque, ducimus ea eum nesciunt perferendis praesentium quaerat quis sapiente! Earum enim inventore officia suscipit vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est et eum eveniet odio odit praesentium tenetur. Autem, cum deleniti dolor eum, excepturi laudantium, libero magni porro possimus saepe velit!',
            'http://localhost/public/images/pineapple.png'
        ),
            new Post('cms',
                '555555555Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt dolorem eos et iure laboriosam magni modi quas quos ratione, temporibus, totam velit. Asperiores commodi expedita minus perspiciatis quos ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor eos expedita iste neque nesciunt quas quisquam soluta. Culpa cupiditate debitis dicta dignissimos, eius fugit harum nulla placeat quasi soluta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium quo ullam! Asperiores corporis doloremque, ducimus ea eum nesciunt perferendis praesentium quaerat quis sapiente! Earum enim inventore officia suscipit vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est et eum eveniet odio odit praesentium tenetur. Autem, cum deleniti dolor eum, excepturi laudantium, libero magni porro possimus saepe velit!',
                'http://localhost/public/images/footer-right.jpg'
            ));
        return json_encode($data);
//        return 'kiss my ass';
    }

}
