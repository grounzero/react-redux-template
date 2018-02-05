import ControllerApi from '../api/controllerApi';

class TeamsApi extends ControllerApi {
    static _name = 'Teams';

    static getTeams() {
        return super.get();
    }

    static getTeamById(id) {
        return super.get('Get', { id });
    }

    static updateTeam(updatedTeam) {
        return super.post('Update', updatedTeam);
    }
}

export default TeamsApi;