class Coder {

    secondLanguage!: string;

    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected language: string
        ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        }
}
