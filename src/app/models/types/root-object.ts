export class RootObject<TBody>
{
    public vhost: string = '/';
    public name: string = 'amq.default';
    public properties: Properties = new Properties();
    public routing_key!: string;
    public delivery_mode: DeliveryMode = DeliveryMode.NonPersistent;
    public payload!: TBody;
    public headers?: { [key: string] : string; };
    public props?: { [key: string] : string; };
    public payload_encoding: PayloadEncoding = PayloadEncoding.Text;
}

export class Properties
{
    public delivery_mode!: DeliveryMode;
    public headers?: { [key: string] : string; };
}

export enum DeliveryMode {
  NonPersistent = 1,
  Persistent= 2,
}

export enum PayloadEncoding {
  Text = "string",
}
