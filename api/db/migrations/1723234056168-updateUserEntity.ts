import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserEntity1723234056168 implements MigrationInterface {
    name = 'UpdateUserEntity1723234056168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "user" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a" UNIQUE ("user")`);
    }

}
