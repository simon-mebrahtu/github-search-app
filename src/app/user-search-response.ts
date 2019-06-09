import { User } from './user';

export class UserSearchResponse {
    constructor(
        public total_count: number,
        public items: User[]
    ){}
}
