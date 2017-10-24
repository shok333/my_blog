<?php
namespace app\models;


use yii\db\ActiveRecord;

class Post extends ActiveRecord
{
    public function getTexts(){
        return $this->hasMany(Texts::className(),['post_id' => 'id']);
    }
    public function getImages(){
        return $this->hasMany(Images::className(),['post_id' => 'id']);
    }
}