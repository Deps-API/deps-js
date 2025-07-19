import { createHttpClient, ApiConfig } from './core/http';
import * as modules from './modules';

export class DepsClient {
  private client: ReturnType<typeof createHttpClient>;

  public player: ReturnType<typeof modules.player>;
  public admins: ReturnType<typeof modules.admins>;
  public online: ReturnType<typeof modules.online>;
  public sobes: ReturnType<typeof modules.sobes>;
  public leadership: ReturnType<typeof modules.leadership>;
  public fractions: ReturnType<typeof modules.fractions>;
  public ghetto: ReturnType<typeof modules.ghetto>;
  public map: ReturnType<typeof modules.map>;
  public families: ReturnType<typeof modules.families>;
  public status: ReturnType<typeof modules.status>;

  constructor(config: ApiConfig) {
    this.client = createHttpClient(config);

    this.player = modules.player(this.client);
    this.admins = modules.admins(this.client);
    this.online = modules.online(this.client);
    this.sobes = modules.sobes(this.client);
    this.leadership = modules.leadership(this.client);
    this.fractions = modules.fractions(this.client);
    this.ghetto = modules.ghetto(this.client);
    this.map = modules.map(this.client);
    this.families = modules.families(this.client);
    this.status = modules.status(this.client);
  }
}
