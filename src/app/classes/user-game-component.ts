export class UserGameComponent {
    id: number;
    username: string;
    user_id: number;
    avatar_id: number;
    current_stage: number;
    level: number;
    exp_accumulated: number;
    cash: number;
    battle_won: number;
    power_multiplication: number;
    power_division: number;
    power_subtraction: number;
    power_addition: number;
    total_pokemon_owned: number;
    // additional helping properties, which are not the main
    is_upgrade: null | any;
    pokedexCompletion: null | any;
    cost_power_division: null | any;
    cost_power_multiplication: null | any;
    cost_power_addition: null | any;
    cost_power_subtraction: null | any;
    power_division_eligibility: null | any;
    power_multiplication_eligibility: null | any;
    power_addition_eligibility: null | any;
    power_subtraction_eligibility: null | any;
}
