package org.example.asm_1.mapper;

import javax.annotation.processing.Generated;
import org.example.asm_1.dto.request.RegisterRequest;
import org.example.asm_1.dto.request.UpdateRequest;
import org.example.asm_1.dto.response.ProfileResponse;
import org.example.asm_1.model.Profile;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-20T16:54:44+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22 (Oracle Corporation)"
)
@Component
public class ProfileMapperImpl implements ProfileMapper {

    @Override
    public Profile toProfile(RegisterRequest request) {
        if ( request == null ) {
            return null;
        }

        Profile.ProfileBuilder profile = Profile.builder();

        profile.id( request.getId() );
        profile.firstName( request.getFirstName() );
        profile.lastName( request.getLastName() );
        profile.email( request.getEmail() );
        profile.username( request.getUsername() );
        profile.password( request.getPassword() );

        return profile.build();
    }

    @Override
    public ProfileResponse toProfileResponse(Profile profile) {
        if ( profile == null ) {
            return null;
        }

        ProfileResponse.ProfileResponseBuilder profileResponse = ProfileResponse.builder();

        profileResponse.email( profile.getEmail() );
        profileResponse.username( profile.getUsername() );
        profileResponse.firstName( profile.getFirstName() );
        profileResponse.lastName( profile.getLastName() );

        return profileResponse.build();
    }

    @Override
    public Profile toUpdateProfile(UpdateRequest request) {
        if ( request == null ) {
            return null;
        }

        Profile.ProfileBuilder profile = Profile.builder();

        profile.firstName( request.getFirstName() );
        profile.lastName( request.getLastName() );
        profile.email( request.getEmail() );

        return profile.build();
    }

    @Override
    public UpdateRequest toUpdateUserResponse(Profile profile) {
        if ( profile == null ) {
            return null;
        }

        UpdateRequest.UpdateRequestBuilder updateRequest = UpdateRequest.builder();

        updateRequest.email( profile.getEmail() );
        updateRequest.firstName( profile.getFirstName() );
        updateRequest.lastName( profile.getLastName() );

        return updateRequest.build();
    }
}
