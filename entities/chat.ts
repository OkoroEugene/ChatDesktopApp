
export class Chat {
    private SenderId: string;
    private ReceiverId: string;
    private Content: string;
    private Date: Date

    constructor(name: string, Date: Date) {
        this.Date = Date;
    }
}