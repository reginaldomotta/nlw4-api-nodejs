import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Survey } from "./Survey";
import { User } from "./User";

/**
 * modelo da entidade pesquisa
 */
@Entity("surveys_users")

/**
 * classe pesquisa
 */
class SurveyUser {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    survey_id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({ name: "survey_id" })
    survey: Survey;

    @Column()
    value: number;

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

export { SurveyUser }