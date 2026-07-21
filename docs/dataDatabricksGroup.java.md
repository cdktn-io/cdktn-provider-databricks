# `dataDatabricksGroup` Submodule <a name="`dataDatabricksGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGroup <a name="DataDatabricksGroup" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group databricks_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroup;

DataDatabricksGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .aclPrincipalId(java.lang.String)
//  .allowClusterCreate(java.lang.Boolean|IResolvable)
//  .allowInstancePoolCreate(java.lang.Boolean|IResolvable)
//  .api(java.lang.String)
//  .childGroups(java.util.List<java.lang.String>)
//  .databricksSqlAccess(java.lang.Boolean|IResolvable)
//  .externalId(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .instanceProfiles(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .providerConfig(DataDatabricksGroupProviderConfig)
//  .recursive(java.lang.Boolean|IResolvable)
//  .roles(java.util.List<java.lang.String>)
//  .servicePrincipals(java.util.List<java.lang.String>)
//  .users(java.util.List<java.lang.String>)
//  .workspaceAccess(java.lang.Boolean|IResolvable)
//  .workspaceConsume(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.api">api</a></code> | <code>java.lang.String</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.childGroups">childGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#groups DataDatabricksGroup#groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#id DataDatabricksGroup#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.instanceProfiles">instanceProfiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#members DataDatabricksGroup#members}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#roles DataDatabricksGroup#roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.servicePrincipals">servicePrincipals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.users">users</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#users DataDatabricksGroup#users}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.workspaceConsume">workspaceConsume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}.

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.aclPrincipalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.allowClusterCreate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.api"></a>

- *Type:* java.lang.String

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#api DataDatabricksGroup#api}

---

##### `childGroups`<sup>Optional</sup> <a name="childGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.childGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#groups DataDatabricksGroup#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#id DataDatabricksGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfiles`<sup>Optional</sup> <a name="instanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.instanceProfiles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#members DataDatabricksGroup#members}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#provider_config DataDatabricksGroup#provider_config}

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.recursive"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#roles DataDatabricksGroup#roles}.

---

##### `servicePrincipals`<sup>Optional</sup> <a name="servicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.servicePrincipals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.users"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#users DataDatabricksGroup#users}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.workspaceAccess"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}.

---

##### `workspaceConsume`<sup>Optional</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.workspaceConsume"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups">resetChildGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles">resetInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive">resetRecursive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals">resetServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers">resetUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceConsume">resetWorkspaceConsume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksGroupProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

---

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId"></a>

```java
public void resetAclPrincipalId()
```

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate"></a>

```java
public void resetAllowClusterCreate()
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate"></a>

```java
public void resetAllowInstancePoolCreate()
```

##### `resetApi` <a name="resetApi" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetApi"></a>

```java
public void resetApi()
```

##### `resetChildGroups` <a name="resetChildGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups"></a>

```java
public void resetChildGroups()
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess"></a>

```java
public void resetDatabricksSqlAccess()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceProfiles` <a name="resetInstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles"></a>

```java
public void resetInstanceProfiles()
```

##### `resetMembers` <a name="resetMembers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers"></a>

```java
public void resetMembers()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetRecursive` <a name="resetRecursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive"></a>

```java
public void resetRecursive()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetServicePrincipals` <a name="resetServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals"></a>

```java
public void resetServicePrincipals()
```

##### `resetUsers` <a name="resetUsers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers"></a>

```java
public void resetUsers()
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess"></a>

```java
public void resetWorkspaceAccess()
```

##### `resetWorkspaceConsume` <a name="resetWorkspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceConsume"></a>

```java
public void resetWorkspaceConsume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroup;

DataDatabricksGroup.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroup;

DataDatabricksGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroup;

DataDatabricksGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroup;

DataDatabricksGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference">DataDatabricksGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput">childGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput">instanceProfilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput">recursiveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput">servicePrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsumeInput">workspaceConsumeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups">childGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles">instanceProfiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals">servicePrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsume">workspaceConsume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfig"></a>

```java
public DataDatabricksGroupProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference">DataDatabricksGroupProviderConfigOutputReference</a>

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput"></a>

```java
public java.lang.String getAclPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowClusterCreateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowInstancePoolCreateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `childGroupsInput`<sup>Optional</sup> <a name="childGroupsInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput"></a>

```java
public java.util.List<java.lang.String> getChildGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getDatabricksSqlAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfilesInput`<sup>Optional</sup> <a name="instanceProfilesInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput"></a>

```java
public java.util.List<java.lang.String> getInstanceProfilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfigInput"></a>

```java
public DataDatabricksGroupProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

---

##### `recursiveInput`<sup>Optional</sup> <a name="recursiveInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput"></a>

```java
public java.lang.Boolean|IResolvable getRecursiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicePrincipalsInput`<sup>Optional</sup> <a name="servicePrincipalsInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getServicePrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput"></a>

```java
public java.util.List<java.lang.String> getUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `workspaceConsumeInput`<sup>Optional</sup> <a name="workspaceConsumeInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsumeInput"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceConsumeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId"></a>

```java
public java.lang.String getAclPrincipalId();
```

- *Type:* java.lang.String

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowClusterCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowInstancePoolCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `childGroups`<sup>Required</sup> <a name="childGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups"></a>

```java
public java.util.List<java.lang.String> getChildGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess"></a>

```java
public java.lang.Boolean|IResolvable getDatabricksSqlAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfiles`<sup>Required</sup> <a name="instanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles"></a>

```java
public java.util.List<java.lang.String> getInstanceProfiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive"></a>

```java
public java.lang.Boolean|IResolvable getRecursive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicePrincipals`<sup>Required</sup> <a name="servicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals"></a>

```java
public java.util.List<java.lang.String> getServicePrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `workspaceConsume`<sup>Required</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsume"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceConsume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGroupConfig <a name="DataDatabricksGroupConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroupConfig;

DataDatabricksGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .aclPrincipalId(java.lang.String)
//  .allowClusterCreate(java.lang.Boolean|IResolvable)
//  .allowInstancePoolCreate(java.lang.Boolean|IResolvable)
//  .api(java.lang.String)
//  .childGroups(java.util.List<java.lang.String>)
//  .databricksSqlAccess(java.lang.Boolean|IResolvable)
//  .externalId(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .instanceProfiles(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .providerConfig(DataDatabricksGroupProviderConfig)
//  .recursive(java.lang.Boolean|IResolvable)
//  .roles(java.util.List<java.lang.String>)
//  .servicePrincipals(java.util.List<java.lang.String>)
//  .users(java.util.List<java.lang.String>)
//  .workspaceAccess(java.lang.Boolean|IResolvable)
//  .workspaceConsume(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.api">api</a></code> | <code>java.lang.String</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups">childGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#groups DataDatabricksGroup#groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#id DataDatabricksGroup#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles">instanceProfiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#members DataDatabricksGroup#members}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#roles DataDatabricksGroup#roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals">servicePrincipals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#users DataDatabricksGroup#users}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceConsume">workspaceConsume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}.

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId"></a>

```java
public java.lang.String getAclPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowClusterCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowInstancePoolCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#api DataDatabricksGroup#api}

---

##### `childGroups`<sup>Optional</sup> <a name="childGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups"></a>

```java
public java.util.List<java.lang.String> getChildGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess"></a>

```java
public java.lang.Boolean|IResolvable getDatabricksSqlAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#groups DataDatabricksGroup#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#id DataDatabricksGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfiles`<sup>Optional</sup> <a name="instanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles"></a>

```java
public java.util.List<java.lang.String> getInstanceProfiles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#members DataDatabricksGroup#members}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.providerConfig"></a>

```java
public DataDatabricksGroupProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#provider_config DataDatabricksGroup#provider_config}

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive"></a>

```java
public java.lang.Boolean|IResolvable getRecursive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#roles DataDatabricksGroup#roles}.

---

##### `servicePrincipals`<sup>Optional</sup> <a name="servicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals"></a>

```java
public java.util.List<java.lang.String> getServicePrincipals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#users DataDatabricksGroup#users}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}.

---

##### `workspaceConsume`<sup>Optional</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceConsume"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceConsume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}.

---

### DataDatabricksGroupProviderConfig <a name="DataDatabricksGroupProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroupProviderConfig;

DataDatabricksGroupProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_id DataDatabricksGroup#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/group#workspace_id DataDatabricksGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGroupProviderConfigOutputReference <a name="DataDatabricksGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_group.DataDatabricksGroupProviderConfigOutputReference;

new DataDatabricksGroupProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.internalValue"></a>

```java
public DataDatabricksGroupProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

---



