import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

/**
 * modelo da entidade pesquisa
 */
@Entity("surveys")

/**
 * classe pesquisa
 */
class Survey {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    /**
     * funcao para gerar o uuid casao nao exista outro
     */
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Survey }