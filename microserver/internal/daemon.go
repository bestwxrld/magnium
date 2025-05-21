package internal

type Daemon struct {
	RecievedMessages map[string]string
	Plugins          []Plugin
}

type Plugin interface {
	Send()
}

func Spawn() *Daemon {
	return &Daemon{}
}

func (d *Daemon) listenPostRequest() {

}

func (d *Daemon) Run() {

}
