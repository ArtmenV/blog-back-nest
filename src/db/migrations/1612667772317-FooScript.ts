import {MigrationInterface, QueryRunner} from "typeorm";

export class FooScript1612667772317 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      console.log('aaa 123123');
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
