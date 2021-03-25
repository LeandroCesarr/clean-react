import { HttpPostClientSpy } from '../../test/moc-http-client';
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpClient)

    await sut.auth()

    expect(httpClient.url).toBe(url)
  });
});
