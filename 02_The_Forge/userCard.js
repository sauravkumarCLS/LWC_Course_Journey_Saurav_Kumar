import { LightningElement } from 'lwc';

export default class UserCard extends LightningElement {
    name = 'Saurav Kumar';
    role = 'Software Engineer';

    handleUpdate() {
        this.name = 'Saurav Kumar 🚀';
        this.role = 'LWC Apprentice';
    }
}
