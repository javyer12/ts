interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}
// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 5000,

//   connect(): void {
//     //
//   },
//   disconnect(): void{},
//   isConnected(name: string): boolean
// }

// class PostgresDriver implements Driver {
//   constructor(
//     public database: string,
//     public password: string,
//     public port: number
//   ) { }
// }

class Oracle implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    protected host: string,
  ) {

  }
  disconnect(): void {
    try {
      console.log('worked ')
    } catch (err) {
      throw new Error("Method not implemented.");
    }
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }

}
