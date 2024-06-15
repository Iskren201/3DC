import { MigrationInterface, QueryRunner } from 'typeorm';

export class ColumnUser1718473267769 implements MigrationInterface {
  name = 'ColumnUser1718473267769';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "user" integer`);
    await queryRunner.query(
      `UPDATE "user" SET "user" = 0 WHERE "user" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "user" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a" UNIQUE ("user")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a"`,
    );

    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user"`);
  }
}
