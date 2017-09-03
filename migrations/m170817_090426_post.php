<?php

use yii\db\Migration;
use yii\db\Schema;

class m170817_090426_post extends Migration
{
    public function safeUp()
    {
        $this->createTable('post',[
            'id' => $this->primaryKey(),
            'header' => $this->string(),
            'text' => $this->text()->notNull(),
            'date' => $this->date(),
            'hash-tags' => $this->string(),
            'image' => $this->string()
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg'
        ]);
    }

    public function safeDown()
    {
        $this->delete('post',['id' => 1]);
        $this->dropTable('post');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m170817_090426_post cannot be reverted.\n";

        return false;
    }
    */
}
