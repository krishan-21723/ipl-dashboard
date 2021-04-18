package io.personal.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.personal.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
