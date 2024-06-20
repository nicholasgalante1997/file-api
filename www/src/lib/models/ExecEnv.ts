export default class ExecEnv {
    static get NodeEnv() {
        return process.env.NODE_ENV === 'production' ? 'production' : 'development';
    }
    static get Browser() {
        if (typeof window === 'undefined') return false;
        return true;
    }
    static get Server() {
        if (typeof window === 'undefined') return true;
    }
}