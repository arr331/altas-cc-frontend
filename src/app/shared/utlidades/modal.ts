declare const bootstrap: any;

export class Modal {
    static show(id: string): void {
        new bootstrap.Modal(document.getElementById(id)).show();
    }

    static hide(id: string): void {
        const modal = document.getElementById(id);
        if (bootstrap.Modal.getInstance(modal)) {
            bootstrap.Modal.getInstance(modal).hide();
        }
    }
}
