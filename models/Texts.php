<?php
namespace app\models;

use yii\db\ActiveRecord;


class Texts extends ActiveRecord
{
    public function getPost(){
        return $this->hasOne(Post::className(),['id' => 'post_id']);
    }
}