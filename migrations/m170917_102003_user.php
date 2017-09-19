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
            'photo' =>$this->string()
        ]);
    }

    public function safeDown()
    {
        echo "m170917_102003_user cannot be reverted.\n";

        return false;
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
