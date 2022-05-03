declare const bootstrap: any;

export class Offcanvas {
    static show(id: string): void {
        new bootstrap.Offcanvas(document.getElementById(id)).show();
    }

    static hide(id: string): void {
        const offcanvas = document.getElementById(id);
        if (bootstrap.Offcanvas.getInstance(offcanvas)) {
            bootstrap.Offcanvas.getInstance(offcanvas).hide();
        }
    }
}
