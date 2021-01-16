import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            point : '',
            setPoint: '',
            open: false,
            setOpen: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleChange = (event) => {
        this.setState({ point: event.target.value });
    };

    handleClose = () => {
        this.setState({ setOpen: false });
    };

    handleOpen = () => {
        this.setState({ setOpen: true });
    };

    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="mapForm" >
                <div className="paper mapPaper">
                    <div className="mapInput">
                        <FormControl className="formControl">
                            <InputLabel id="from-open-select-label">Откуда</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={this.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.point}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={"Кул-Шариф"}>Кул-Шариф</MenuItem>
                                <MenuItem value={"Козья слобода"}>Козья слобода</MenuItem>
                                <MenuItem value={"Мега"}>Мега</MenuItem>
                                <MenuItem value={"Дворец бракосочетания"}>Дворец бракосочетания</MenuItem>
                                <MenuItem value={"Тандем"}>Тандем</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="formControl">
                            <InputLabel id="demo-controlled-open-select-label">Куда</InputLabel>
                            <Select
                                labelId="to-open-select-label"
                                id="demo-controlled-open-select"
                                open={this.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.point}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={"Кул-Шариф"}>Кул-Шариф</MenuItem>
                                <MenuItem value={"Козья слобода"}>Козья слобода</MenuItem>
                                <MenuItem value={"Мега"}>Мега</MenuItem>
                                <MenuItem value={"Дворец бракосочетания"}>Дворец бракосочетания</MenuItem>
                                <MenuItem value={"Тандем"}>Тандем</MenuItem>
                            </Select>
                        </FormControl>
                        <button type="submit" className="submit">
                            Заказать
                        </button>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default LoginForm;