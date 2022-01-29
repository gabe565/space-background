# [Space Background](https://background.gabe.space)

This is a website based off of <https://spacexfm.com> that shows a star field similar to SpaceX's stream into.

# Parameters

The page is configurable through a number of URL search parameters. The following parameters are currently supported:

| Key               | Default                                                    | Description                                                                               | Example                                                                                                                                                                                                   |
|-------------------|------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `background`/`bg` | [`images/background.jpg`](/images/background.jpg?raw=true) | Changes the background image. Note that you will need to encode the background image URL. | [`?bg=[...]images.unsplash.com[...]`](https://background.gabe.space/?bg=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1467685790346-20bfe73a81f0%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1920%26h%3D1080%26q%3D80) |
| `transparent`     | `false`                                                    | Hides the background image. This results in transparency when used with OBS.              | [`?transparent`](https://background.gabe.space/?transparent)                                                                                                                                              |
| `stars`           | `200`                                                      | Number of generated stars.                                                                | [`?stars=2000`](https://background.gabe.space/?stars=2000)                                                                                                                                                |
| `speed`           | `1`                                                        | Star speed multiplier.                                                                    | [`?speed=50`](https://background.gabe.space/?speed=50)                                                                                                                                                    |
