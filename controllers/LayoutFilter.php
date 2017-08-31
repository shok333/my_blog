<?php
/**
 * Created by PhpStorm.
 * User: Dmirtiy
 * Date: 21.08.2017
 * Time: 12:54
 */

namespace app\controllers;


use yii\base\ActionFilter;
use Yii;

class LayoutFilter extends ActionFilter
{
    public function afterAction($action,$result){
        $request = Yii::$app->request;
        return parent::afterAction($action,$result);
    }
}