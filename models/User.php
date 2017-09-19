<?php

namespace app\models;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;
use app\models\MailerForm; //добавляемая строка
use Yii;
use yii\web\UploadedFile;

class User extends ActiveRecord implements IdentityInterface
{
//    function __construct() {
//
//    }

//    private function savePhoto(){
//
//        if (Yii::$app->request->isPost) {
//            $model->imageFile = UploadedFile::getInstance($model, 'imageFile');
//            if ($model->upload()) {
//                // file is uploaded successfully
//                return;
//            }
//        }
//    }

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {

    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->authKey;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->authKey === $authKey;
    }

    public function emailConfirm(){
        Yii::$app->mailer->compose()
            ->setFrom('blog@supertop10.ru')
            ->setTo($this->email)
            ->setSubject('Подтверждение регистрации')
            ->setTextBody('Сообщение про инику:'.$this->password)
            ->send();
    }

}
