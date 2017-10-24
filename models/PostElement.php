<?php

namespace app\models;


class PostElement
{
    private $number;
    private $type;
    private $value;
    function __construct($number,$type,$value){
        $this->type=$type;
        $this->value=$value;
        $this->number=$number;
    }
    public function getArrayOfPostElement(){
        return ['number'=> $this->number, 'type' => $this->type, 'value' => $this->value];
    }
}