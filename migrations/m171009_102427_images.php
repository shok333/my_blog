<?php

use yii\db\Migration;

class m171009_102427_images extends Migration
{
    public function safeUp()
    {
        $this->createTable('images',[
            'id' => $this->primaryKey(),
            'post_id' => $this->integer(),
            'number' => $this->integer(),
            'name' => $this->string(),
        ]);
    }

    public function safeDown()
    {
        echo "m171009_102427_images cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m171009_102427_images cannot be reverted.\n";

        return false;
    }
    */
}
