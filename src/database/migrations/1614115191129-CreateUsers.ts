import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1614115191129 implements MigrationInterface {

    /**
     * funcao para criar a tabela
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(

            /**
             * cria a tabela confome as definições
             */
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    /**
     * funcao para deletar a tabela no banco
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
