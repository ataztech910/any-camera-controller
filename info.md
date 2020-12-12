# Главная страница:

Строка поиска для поиска города. Поиск работает следующим образом: 
1) В файле json хранится информация имеющая следующую структуру:


{
    cityList: [
        {
          cityName: <String>,
          adressList: [
            {
              addressName: <String>,
              cameraList: [
                {
                    description: <SOME-DESCRIPTION>,
                    uuid: <UNIQUE-VALUE>
                }
              ]
            }
          ]
        }
    ]
}

2) Пользователь вводит название города и получает список адресов в схожем городе 
3) При клике на адрес пользователь проваливается в управление камерами филиала. Текущая ветка сохраняется в стор

## Cтраница филиала:
название камеры (физическое размешение камеры, к примеру: выход, окно№2 и тд), напротив - окно плеера с размером 300px на 250px, при кли ке на <play> запуск трансляции.
все камеры расположены друг под другом.

## Kнопка Home

Bозрашает на главную страницу

---

код плеера:
<HTML>
<HEAD>
	<title>My Wowza Player Video</title>
	<script type="text/javascript" src="https://player.wowza.com/player/latest/wowzaplayer.min.js"></script>
</HEAD>
<BODY>
<div id="playerElement" style="width:100%; height:0; padding:0 0 56.25% 0"></div>
<script type="text/javascript">
	WowzaPlayer.create('playerElement',
		{
		"license":"PLAY2-jPNR8-J8WTA-Eabzm-4Cj6E-u7CPZ",
		"title":"Дирекция (коридор 4 этаж)",
		"description":"_",
		"sourceURL":"https://mfc-video.site/live/dir_kor_4/playlist.m3u8",
    "autoPlay":false,
		"volume":"75",
		"mute":false,
		"loop":false,
		"audioOnly":false,
		"uiShowQuickRewind":true,
		"uiQuickRewindSeconds":"30"
		}
	);
	</script>
<BODY>
</HTML>

(Дирекция) екатеринбург 8 марта 13:
    [Коридор 4 этаж]	 https://mfc-video.site/live/dir_kor_4/playlist.m3u8
    [Вход 4 этаж]	 https://mfc-video.site/live/dir_exit_4/playlist.m3u8
    [Серверная 3 этаж]	 https://mfc-video.site/live/dir_server_3/playlist.m3u8
    [Лифты 3 этаж]	 https://mfc-video.site/live/dir_elevator_3/playlist.m3u8
    [Закупка 3 этаж]	 https://mfc-video.site/live/dir_VKS_3/playlist.m3u8
    [Коридор 3 этаж]	 https://mfc-video.site/live/dir_kor_3/playlist.m3u8
    [Столовая] 	         https://mfc-video.site/live/dir_stolovai/playlist.m3u8
    [Квадрат 3 этаж]	 https://mfc-video.site/live/dir_server2_3/playlist.m3u8
    [Серверная2]	 https://mfc-video.site/live/dir_server3_3/playlist.m3u8
    [Коридор 2]	         https://mfc-video.site/live/dir_kor2_3/playlist.m3u8
    
 г. Алапаевск, ул. Ленина, 16
 
 г. Арамиль, ул. Щорса, 57
 
 г. Артемовский, ул. Почтовая, 2
 
## Авторизация:
Допуск  2х типов: админ и оператор

 
 
 
