import { BaseRepository } from './base/BaseRepository';
import { Chat } from '../entities/chat';

export class ChastRepository extends BaseRepository<Chat>{
    // here, we can create all especific stuffs of Spartan Repository
    countOfChats(): Promise<number> {
        return this._collection.count({})
    }
}