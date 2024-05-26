import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPrice1716579497233 implements MigrationInterface {
    name = 'AddPrice1716579497233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
    }

}
