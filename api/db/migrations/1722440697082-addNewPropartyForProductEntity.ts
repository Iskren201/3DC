import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewPropartyForProductEntity1722440697082
  implements MigrationInterface
{
  name = 'AddNewPropartyForProductEntity1722440697082';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "description" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "product" ADD "stock" integer`);
    await queryRunner.query(
      `ALTER TABLE "product" ADD "imageUrl" character varying`,
    );

    await queryRunner.query(
      `UPDATE "product" SET "description" = 'No description provided' WHERE "description" IS NULL`,
    );
    await queryRunner.query(
      `UPDATE "product" SET "stock" = 0 WHERE "stock" IS NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "description" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "stock" SET NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "imageUrl"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "stock"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
  }
}
