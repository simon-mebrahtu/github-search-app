import { Repository } from './repository';

export class RepositorySearchResponse {
    constructor(
        public total_count: number,
        public items: Repository[]
    ){}
}
