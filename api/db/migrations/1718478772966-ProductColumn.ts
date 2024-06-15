import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductColumn1718478772966 implements MigrationInterface {
    name = 'ProductColumn1718478772966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productName"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productImg"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "productImg" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "productName" character varying NOT NULL`);
    }

}
