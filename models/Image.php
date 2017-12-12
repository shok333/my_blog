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
use Yii;

class Image extends Model
{
    public $image;
    public $smallImage;

    function __construct($imageName){
        $this->image = UploadedFile::getInstanceByName($imageName);
        $this->smallImage = UploadedFile::getInstanceByName('s'.$imageName);
    }

    public function fileValidator($prop){
        $imageType = $this[$prop]->type;
        if(!($imageType == 'image/png' || $imageType == 'image/jpg')){
            $this->addError('Неправильный тип загруженного файла');
        }
    }

    public function rules()
    {
        return [
            [['image', 'smallImage'], 'fileValidator' ],
        ];
    }

    public function saveImage(){
        if ($this->validate()) {
            $imageName=uniqid() . '.' .substr($this->image->type,6);
            $this->smallImage->saveAs($_SERVER['DOCUMENT_ROOT'] .  '/web/images/small-user-image/'. $imageName);
            $this->image->saveAs($_SERVER['DOCUMENT_ROOT'] .  '/web/images/big-user-image/'. $imageName);
            return $imageName;
        }
        else{
            $err = 'error';
            return null;
        }

//
//
//
//
//
//        $imageName=uniqid() . '.' .substr($_FILES[$bigImageName]["type"],6);
//        $urlBig=$_SERVER['DOCUMENT_ROOT'] .  '/web/images/big-user-image/'. $imageName;
//        if($_FILES[$bigImageName]["tmp_name"])
//        {
//            move_uploaded_file($_FILES[$bigImageName]["tmp_name"], $urlBig);
//        }
//
//        $urlSmall=$_SERVER['DOCUMENT_ROOT'] .  '/web/images/small-user-image/'. $imageName;
//        if($_FILES[$smallImageName]["tmp_name"])
//        {
//            move_uploaded_file($_FILES[$smallImageName]["tmp_name"], $urlSmall);
//        }
//        return $imageName;
    }
}