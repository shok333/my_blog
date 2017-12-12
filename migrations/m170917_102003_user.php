<?php

use yii\db\Migration;

class m170917_102003_user extends Migration
{
    public function safeUp()
    {
        $this->createTable('user',[
            'id' => $this->primaryKey(),
            'email' => $this->string(),
            'name' => $this->string(),
            'password' => $this->string(),
            'status' => $this->string(),
            'confirm' =>$this->boolean(),
            'image' =>$this->string()
        ]);
        $this->insert('user',[
            'email' => 'user@user.ru',
            'name' => 'user',
            'password' => 'user',
            'status' => 'user',
        ]);
    }

    public function safeDown()
    {
        $this->delete('user',['id' => 1]);
        $this->dropTable('user');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m170917_102003_user cannot be reverted.\n";

        return false;
    }
    */
}
