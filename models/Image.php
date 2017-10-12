<?php
/**
 * Created by PhpStorm.
 * User: Dmirtiy
 * Date: 21.09.2017
 * Time: 10:19
 */

namespace app\models;


use yii\base\Model;
use yii\web\UploadedFile;
use yii\db\ActiveRecord;

class Image extends Model
{

    public function rules(){
        return array(
            array('image', 'file', 'types'=>'jpg, gif, png'),
        );
    }

    public function saveImage($bigImageName,$smallImageName){
        $imageName=uniqid() . '.' .substr($_FILES[$bigImageName]["type"],6);
        $urlBig=$_SERVER['DOCUMENT_ROOT'] .  '/web/images/big-user-image/'. $imageName;
        if($_FILES[$bigImageName]["tmp_name"])
        {
            move_uploaded_file($_FILES[$bigImageName]["tmp_name"], $urlBig);
        }

        $urlSmall=$_SERVER['DOCUMENT_ROOT'] .  '/web/images/small-user-image/'. $imageName;
        if($_FILES[$smallImageName]["tmp_name"])
        {
            move_uploaded_file($_FILES[$smallImageName]["tmp_name"], $urlSmall);
        }
        return $imageName;
    }
}