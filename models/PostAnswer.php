<?php
namespace app\models;

use app\models\PostElement;

class PostAnswer
{
    private $elements;
    function __construct($header,$texts,$images){
        $this->elements=[];
        array_push($this->elements,(new PostElement(0,'h1',$header->header))->getArrayOfPostElement());
        foreach($images as $item){
            array_push($this->elements,(new PostElement($item->number,'img',$item->name))->getArrayOfPostElement());
        }
        foreach($texts as $item){
            array_push($this->elements,(new PostElement($item->number,$item->type,$item->value))->getArrayOfPostElement());
        }
    }
    function getArrayOfElements(){
        return $this->elements;
    }
}