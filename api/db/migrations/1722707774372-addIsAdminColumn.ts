import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsAdminColumn1722707774372 implements MigrationInterface {
    name = 'AddIsAdminColumn1722707774372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdmin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdmin"`);
    }

}
