import {MigrationInterface, QueryRunner} from "typeorm";

export class BarScript1612673415763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      console.log('111 Test');
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
