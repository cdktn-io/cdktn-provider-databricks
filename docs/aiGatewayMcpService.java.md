# `aiGatewayMcpService` Submodule <a name="`aiGatewayMcpService` Submodule" id="@cdktn/provider-databricks.aiGatewayMcpService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayMcpService <a name="AiGatewayMcpService" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service databricks_ai_gateway_mcp_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpService;

AiGatewayMcpService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServiceId(java.lang.String)
    .parent(java.lang.String)
//  .comment(java.lang.String)
//  .config(AiGatewayMcpServiceConfigA)
//  .owner(java.lang.String)
//  .providerConfig(AiGatewayMcpServiceProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.mcpServiceId">mcpServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#mcp_service_id AiGatewayMcpService#mcp_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#parent AiGatewayMcpService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#comment AiGatewayMcpService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#config AiGatewayMcpService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#owner AiGatewayMcpService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#provider_config AiGatewayMcpService#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServiceId`<sup>Required</sup> <a name="mcpServiceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.mcpServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#mcp_service_id AiGatewayMcpService#mcp_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#parent AiGatewayMcpService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#comment AiGatewayMcpService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#config AiGatewayMcpService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#owner AiGatewayMcpService#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#provider_config AiGatewayMcpService#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putConfig"></a>

```java
public void putConfig(AiGatewayMcpServiceConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putProviderConfig"></a>

```java
public void putProviderConfig(AiGatewayMcpServiceProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetComment"></a>

```java
public void resetComment()
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayMcpService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isConstruct"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpService;

AiGatewayMcpService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpService;

AiGatewayMcpService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpService;

AiGatewayMcpService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpService;

AiGatewayMcpService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiGatewayMcpService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiGatewayMcpService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiGatewayMcpService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiGatewayMcpService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayMcpService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.browseOnly">browseOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference">AiGatewayMcpServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.effectiveOwner">effectiveOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference">AiGatewayMcpServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.configInput">configInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceIdInput">mcpServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceId">mcpServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.browseOnly"></a>

```java
public IResolvable getBrowseOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.config"></a>

```java
public AiGatewayMcpServiceConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference">AiGatewayMcpServiceConfigAOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.effectiveOwner"></a>

```java
public java.lang.String getEffectiveOwner();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfig"></a>

```java
public AiGatewayMcpServiceProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference">AiGatewayMcpServiceProviderConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.configInput"></a>

```java
public IResolvable|AiGatewayMcpServiceConfigA getConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

---

##### `mcpServiceIdInput`<sup>Optional</sup> <a name="mcpServiceIdInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceIdInput"></a>

```java
public java.lang.String getMcpServiceIdInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfigInput"></a>

```java
public IResolvable|AiGatewayMcpServiceProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `mcpServiceId`<sup>Required</sup> <a name="mcpServiceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceId"></a>

```java
public java.lang.String getMcpServiceId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayMcpServiceConfig <a name="AiGatewayMcpServiceConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfig;

AiGatewayMcpServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServiceId(java.lang.String)
    .parent(java.lang.String)
//  .comment(java.lang.String)
//  .config(AiGatewayMcpServiceConfigA)
//  .owner(java.lang.String)
//  .providerConfig(AiGatewayMcpServiceProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.mcpServiceId">mcpServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#mcp_service_id AiGatewayMcpService#mcp_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#parent AiGatewayMcpService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#comment AiGatewayMcpService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#config AiGatewayMcpService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#owner AiGatewayMcpService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#provider_config AiGatewayMcpService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServiceId`<sup>Required</sup> <a name="mcpServiceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.mcpServiceId"></a>

```java
public java.lang.String getMcpServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#mcp_service_id AiGatewayMcpService#mcp_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#parent AiGatewayMcpService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#comment AiGatewayMcpService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.config"></a>

```java
public AiGatewayMcpServiceConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#config AiGatewayMcpService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#owner AiGatewayMcpService#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.providerConfig"></a>

```java
public AiGatewayMcpServiceProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#provider_config AiGatewayMcpService#provider_config}.

---

### AiGatewayMcpServiceConfigA <a name="AiGatewayMcpServiceConfigA" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigA;

AiGatewayMcpServiceConfigA.builder()
//  .includeToolSelectors(java.util.List<java.lang.String>)
//  .rateLimits(IResolvable|java.util.List<AiGatewayMcpServiceConfigRateLimits>)
//  .sourceConnection(AiGatewayMcpServiceConfigSourceConnection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.includeToolSelectors">includeToolSelectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#include_tool_selectors AiGatewayMcpService#include_tool_selectors}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.rateLimits">rateLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#rate_limits AiGatewayMcpService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#source_connection AiGatewayMcpService#source_connection}. |

---

##### `includeToolSelectors`<sup>Optional</sup> <a name="includeToolSelectors" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.includeToolSelectors"></a>

```java
public java.util.List<java.lang.String> getIncludeToolSelectors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#include_tool_selectors AiGatewayMcpService#include_tool_selectors}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.rateLimits"></a>

```java
public IResolvable|java.util.List<AiGatewayMcpServiceConfigRateLimits> getRateLimits();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#rate_limits AiGatewayMcpService#rate_limits}.

---

##### `sourceConnection`<sup>Optional</sup> <a name="sourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.sourceConnection"></a>

```java
public AiGatewayMcpServiceConfigSourceConnection getSourceConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#source_connection AiGatewayMcpService#source_connection}.

---

### AiGatewayMcpServiceConfigRateLimits <a name="AiGatewayMcpServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigRateLimits;

AiGatewayMcpServiceConfigRateLimits.builder()
    .key(java.lang.String)
    .renewalPeriod(java.lang.String)
//  .principal(java.lang.String)
//  .requests(java.lang.Number)
//  .requestTagKey(java.lang.String)
//  .requestTagValue(java.lang.String)
//  .tokens(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#key AiGatewayMcpService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#renewal_period AiGatewayMcpService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#principal AiGatewayMcpService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requests">requests</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#requests AiGatewayMcpService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagKey">requestTagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_key AiGatewayMcpService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagValue">requestTagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_value AiGatewayMcpService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#tokens AiGatewayMcpService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#key AiGatewayMcpService#key}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#renewal_period AiGatewayMcpService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#principal AiGatewayMcpService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#requests AiGatewayMcpService#requests}.

---

##### `requestTagKey`<sup>Optional</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagKey"></a>

```java
public java.lang.String getRequestTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_key AiGatewayMcpService#request_tag_key}.

---

##### `requestTagValue`<sup>Optional</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagValue"></a>

```java
public java.lang.String getRequestTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_value AiGatewayMcpService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#tokens AiGatewayMcpService#tokens}.

---

### AiGatewayMcpServiceConfigSourceConnection <a name="AiGatewayMcpServiceConfigSourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigSourceConnection;

AiGatewayMcpServiceConfigSourceConnection.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#name AiGatewayMcpService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#name AiGatewayMcpService#name}.

---

### AiGatewayMcpServiceProviderConfig <a name="AiGatewayMcpServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceProviderConfig;

AiGatewayMcpServiceProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#workspace_id AiGatewayMcpService#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#workspace_id AiGatewayMcpService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayMcpServiceConfigAOutputReference <a name="AiGatewayMcpServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigAOutputReference;

new AiGatewayMcpServiceConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putSourceConnection">putSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors">resetIncludeToolSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetSourceConnection">resetSourceConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateLimits` <a name="putRateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putRateLimits"></a>

```java
public void putRateLimits(IResolvable|java.util.List<AiGatewayMcpServiceConfigRateLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>>

---

##### `putSourceConnection` <a name="putSourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putSourceConnection"></a>

```java
public void putSourceConnection(AiGatewayMcpServiceConfigSourceConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

---

##### `resetIncludeToolSelectors` <a name="resetIncludeToolSelectors" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors"></a>

```java
public void resetIncludeToolSelectors()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetSourceConnection` <a name="resetSourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetSourceConnection"></a>

```java
public void resetSourceConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList">AiGatewayMcpServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference">AiGatewayMcpServiceConfigSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput">includeToolSelectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput">sourceConnectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors">includeToolSelectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimits"></a>

```java
public AiGatewayMcpServiceConfigRateLimitsList getRateLimits();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList">AiGatewayMcpServiceConfigRateLimitsList</a>

---

##### `sourceConnection`<sup>Required</sup> <a name="sourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnection"></a>

```java
public AiGatewayMcpServiceConfigSourceConnectionOutputReference getSourceConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference">AiGatewayMcpServiceConfigSourceConnectionOutputReference</a>

---

##### `includeToolSelectorsInput`<sup>Optional</sup> <a name="includeToolSelectorsInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput"></a>

```java
public java.util.List<java.lang.String> getIncludeToolSelectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput"></a>

```java
public IResolvable|java.util.List<AiGatewayMcpServiceConfigRateLimits> getRateLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>>

---

##### `sourceConnectionInput`<sup>Optional</sup> <a name="sourceConnectionInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput"></a>

```java
public IResolvable|AiGatewayMcpServiceConfigSourceConnection getSourceConnectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

---

##### `includeToolSelectors`<sup>Required</sup> <a name="includeToolSelectors" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors"></a>

```java
public java.util.List<java.lang.String> getIncludeToolSelectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayMcpServiceConfigA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

---


### AiGatewayMcpServiceConfigRateLimitsList <a name="AiGatewayMcpServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigRateLimitsList;

new AiGatewayMcpServiceConfigRateLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.get"></a>

```java
public AiGatewayMcpServiceConfigRateLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayMcpServiceConfigRateLimits> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>>

---


### AiGatewayMcpServiceConfigRateLimitsOutputReference <a name="AiGatewayMcpServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigRateLimitsOutputReference;

new AiGatewayMcpServiceConfigRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey">resetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue">resetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests"></a>

```java
public void resetRequests()
```

##### `resetRequestTagKey` <a name="resetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```java
public void resetRequestTagKey()
```

##### `resetRequestTagValue` <a name="resetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```java
public void resetRequestTagValue()
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens"></a>

```java
public void resetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput">requestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">requestTagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput">requestTagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput">tokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey">requestTagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue">requestTagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```java
public java.lang.String getRenewalPeriodInput();
```

- *Type:* java.lang.String

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```java
public java.lang.Number getRequestsInput();
```

- *Type:* java.lang.Number

---

##### `requestTagKeyInput`<sup>Optional</sup> <a name="requestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```java
public java.lang.String getRequestTagKeyInput();
```

- *Type:* java.lang.String

---

##### `requestTagValueInput`<sup>Optional</sup> <a name="requestTagValueInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```java
public java.lang.String getRequestTagValueInput();
```

- *Type:* java.lang.String

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```java
public java.lang.Number getTokensInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

---

##### `requestTagKey`<sup>Required</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```java
public java.lang.String getRequestTagKey();
```

- *Type:* java.lang.String

---

##### `requestTagValue`<sup>Required</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```java
public java.lang.String getRequestTagValue();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayMcpServiceConfigRateLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>

---


### AiGatewayMcpServiceConfigSourceConnectionOutputReference <a name="AiGatewayMcpServiceConfigSourceConnectionOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceConfigSourceConnectionOutputReference;

new AiGatewayMcpServiceConfigSourceConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted">isDeleted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted"></a>

```java
public IResolvable getIsDeleted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayMcpServiceConfigSourceConnection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

---


### AiGatewayMcpServiceProviderConfigOutputReference <a name="AiGatewayMcpServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_mcp_service.AiGatewayMcpServiceProviderConfigOutputReference;

new AiGatewayMcpServiceProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayMcpServiceProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

---



