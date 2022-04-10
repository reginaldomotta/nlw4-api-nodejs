import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

/**
 * modelo da entidade usuario
 */
@Entity("users")

/**
 * classe usuario
 */
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

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

export { User }