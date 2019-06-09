import { User } from './user';

export class Repository {
    constructor(
        public name: string,
        public full_name: string,
        public owner: User,
        public html_url: string,
        public description: string,
        public fork: boolean,
        public url: string,
        public created_at: string,
        public updated_at: string,
        public pushed_at: string,
        public git_url: string,
        public ssh_url: string,
        public clone_url: string,
        public homepage: null,
        public size: number,
        public language: string,
        public has_wiki: boolean,
        public has_pages: boolean,
        public license: null,
        public forks: number,
        public watchers: number,
        public default_branch: string,
        public score: number
    ){}
}
