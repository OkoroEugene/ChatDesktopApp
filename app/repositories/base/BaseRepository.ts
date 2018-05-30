import { IWrite, IRead } from "../interface/iRepository";

// we imported all types from mongodb driver, to use in code
import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _collection: Collection;

    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }

    async create(item: T): Promise<boolean> {
        const result: InsertOneWriteOpResult = await this._collection.insert(item);
        // after the insert operations, we returns only ok property (that haves a 1 or 0 results)
        // and we convert to boolean result (0 false, 1 true)
        return !!result.result.ok;
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}