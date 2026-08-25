# `aiGatewayModelProviderService` Submodule <a name="`aiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.aiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayModelProviderService <a name="AiGatewayModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderService;

AiGatewayModelProviderService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .modelProviderServiceId(java.lang.String)
    .parent(java.lang.String)
//  .comment(java.lang.String)
//  .config(AiGatewayModelProviderServiceConfigA)
//  .owner(java.lang.String)
//  .providerConfig(AiGatewayModelProviderServiceProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.modelProviderServiceId">modelProviderServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `modelProviderServiceId`<sup>Required</sup> <a name="modelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.modelProviderServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig"></a>

```java
public void putConfig(AiGatewayModelProviderServiceConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig"></a>

```java
public void putProviderConfig(AiGatewayModelProviderServiceProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment"></a>

```java
public void resetComment()
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderService;

AiGatewayModelProviderService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderService;

AiGatewayModelProviderService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderService;

AiGatewayModelProviderService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderService;

AiGatewayModelProviderService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiGatewayModelProviderService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiGatewayModelProviderService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner">effectiveOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput">configInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput">modelProviderServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId">modelProviderServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config"></a>

```java
public AiGatewayModelProviderServiceConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner"></a>

```java
public java.lang.String getEffectiveOwner();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig"></a>

```java
public AiGatewayModelProviderServiceProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigA getConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---

##### `modelProviderServiceIdInput`<sup>Optional</sup> <a name="modelProviderServiceIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput"></a>

```java
public java.lang.String getModelProviderServiceIdInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `modelProviderServiceId`<sup>Required</sup> <a name="modelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId"></a>

```java
public java.lang.String getModelProviderServiceId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayModelProviderServiceConfig <a name="AiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfig;

AiGatewayModelProviderServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .modelProviderServiceId(java.lang.String)
    .parent(java.lang.String)
//  .comment(java.lang.String)
//  .config(AiGatewayModelProviderServiceConfigA)
//  .owner(java.lang.String)
//  .providerConfig(AiGatewayModelProviderServiceProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId">modelProviderServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `modelProviderServiceId`<sup>Required</sup> <a name="modelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId"></a>

```java
public java.lang.String getModelProviderServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config"></a>

```java
public AiGatewayModelProviderServiceConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```java
public AiGatewayModelProviderServiceProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}.

---

### AiGatewayModelProviderServiceConfigA <a name="AiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigA;

AiGatewayModelProviderServiceConfigA.builder()
//  .allowAllTargets(java.lang.Boolean|IResolvable)
//  .amazonBedrock(AiGatewayModelProviderServiceConfigAmazonBedrock)
//  .anthropic(AiGatewayModelProviderServiceConfigAnthropic)
//  .azureOpenai(AiGatewayModelProviderServiceConfigAzureOpenai)
//  .custom(AiGatewayModelProviderServiceConfigCustom)
//  .forwardHeaders(java.lang.Boolean|IResolvable)
//  .forwardQueryParameters(java.lang.Boolean|IResolvable)
//  .forwardUnmanagedPaths(java.lang.Boolean|IResolvable)
//  .geminiEnterprise(AiGatewayModelProviderServiceConfigGeminiEnterprise)
//  .inferenceTable(AiGatewayModelProviderServiceConfigInferenceTable)
//  .microsoftFoundry(AiGatewayModelProviderServiceConfigMicrosoftFoundry)
//  .openai(AiGatewayModelProviderServiceConfigOpenai)
//  .providerType(java.lang.String)
//  .rateLimits(IResolvable|java.util.List<AiGatewayModelProviderServiceConfigRateLimits>)
//  .targets(IResolvable|java.util.List<AiGatewayModelProviderServiceConfigTargets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets">allowAllTargets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock">amazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai">azureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders">forwardHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">forwardQueryParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">forwardUnmanagedPaths</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise">geminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable">inferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry">microsoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType">providerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits">rateLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}. |

---

##### `allowAllTargets`<sup>Optional</sup> <a name="allowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```java
public java.lang.Boolean|IResolvable getAllowAllTargets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}.

---

##### `amazonBedrock`<sup>Optional</sup> <a name="amazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrock getAmazonBedrock();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}.

---

##### `anthropic`<sup>Optional</sup> <a name="anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropic getAnthropic();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}.

---

##### `azureOpenai`<sup>Optional</sup> <a name="azureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenai getAzureOpenai();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom"></a>

```java
public AiGatewayModelProviderServiceConfigCustom getCustom();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}.

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```java
public java.lang.Boolean|IResolvable getForwardHeaders();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}.

---

##### `forwardQueryParameters`<sup>Optional</sup> <a name="forwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```java
public java.lang.Boolean|IResolvable getForwardQueryParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}.

---

##### `forwardUnmanagedPaths`<sup>Optional</sup> <a name="forwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```java
public java.lang.Boolean|IResolvable getForwardUnmanagedPaths();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `geminiEnterprise`<sup>Optional</sup> <a name="geminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```java
public AiGatewayModelProviderServiceConfigGeminiEnterprise getGeminiEnterprise();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}.

---

##### `inferenceTable`<sup>Optional</sup> <a name="inferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```java
public AiGatewayModelProviderServiceConfigInferenceTable getInferenceTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}.

---

##### `microsoftFoundry`<sup>Optional</sup> <a name="microsoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundry getMicrosoftFoundry();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}.

---

##### `openai`<sup>Optional</sup> <a name="openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai"></a>

```java
public AiGatewayModelProviderServiceConfigOpenai getOpenai();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}.

---

##### `providerType`<sup>Optional</sup> <a name="providerType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```java
public IResolvable|java.util.List<AiGatewayModelProviderServiceConfigRateLimits> getRateLimits();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets"></a>

```java
public IResolvable|java.util.List<AiGatewayModelProviderServiceConfigTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrock <a name="AiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrock;

AiGatewayModelProviderServiceConfigAmazonBedrock.builder()
//  .direct(AiGatewayModelProviderServiceConfigAmazonBedrockDirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirect;

AiGatewayModelProviderServiceConfigAmazonBedrockDirect.builder()
//  .awsAccessKey(AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey)
//  .region(java.lang.String)
//  .serviceCredential(AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey">awsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">serviceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `awsAccessKey`<sup>Optional</sup> <a name="awsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey getAwsAccessKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

##### `serviceCredential`<sup>Optional</sup> <a name="serviceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential getServiceCredential();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey;

AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.builder()
//  .accessKeyId(java.lang.String)
//  .secretAccessKey(AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey">secretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}. |

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}.

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey getSecretAccessKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey;

AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential;

AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigAnthropic <a name="AiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropic;

AiGatewayModelProviderServiceConfigAnthropic.builder()
//  .direct(AiGatewayModelProviderServiceConfigAnthropicDirect)
//  .relayed(AiGatewayModelProviderServiceConfigAnthropicRelayed)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed">relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `relayed`<sup>Optional</sup> <a name="relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicRelayed getRelayed();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirect <a name="AiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicDirect;

AiGatewayModelProviderServiceConfigAnthropicDirect.builder()
//  .apiKey(AiGatewayModelProviderServiceConfigAnthropicDirectApiKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicDirectApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey;

AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAnthropicRelayed <a name="AiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicRelayed;

AiGatewayModelProviderServiceConfigAnthropicRelayed.builder()
//  .planType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">planType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}. |

---

##### `planType`<sup>Optional</sup> <a name="planType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}.

---

### AiGatewayModelProviderServiceConfigAzureOpenai <a name="AiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenai;

AiGatewayModelProviderServiceConfigAzureOpenai.builder()
//  .direct(AiGatewayModelProviderServiceConfigAzureOpenaiDirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirect;

AiGatewayModelProviderServiceConfigAzureOpenaiDirect.builder()
//  .apiKey(AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey)
//  .baseUrl(java.lang.String)
//  .entraServicePrincipal(AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal)
//  .serviceCredential(AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal">entraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">serviceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `entraServicePrincipal`<sup>Optional</sup> <a name="entraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal getEntraServicePrincipal();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

##### `serviceCredential`<sup>Optional</sup> <a name="serviceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential getServiceCredential();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey;

AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal;

AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.builder()
//  .clientId(java.lang.String)
//  .clientSecret(AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret getClientSecret();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret;

AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential;

AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigCustom <a name="AiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigCustom;

AiGatewayModelProviderServiceConfigCustom.builder()
//  .direct(AiGatewayModelProviderServiceConfigCustomDirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigCustomDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigCustomDirect <a name="AiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigCustomDirect;

AiGatewayModelProviderServiceConfigCustomDirect.builder()
//  .apiKey(AiGatewayModelProviderServiceConfigCustomDirectApiKey)
//  .baseUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigCustomDirectApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

### AiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigCustomDirectApiKey;

AiGatewayModelProviderServiceConfigCustomDirectApiKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterprise <a name="AiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigGeminiEnterprise;

AiGatewayModelProviderServiceConfigGeminiEnterprise.builder()
//  .direct(AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect;

AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.builder()
//  .apiKey(AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey)
//  .projectId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey;

AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigInferenceTable <a name="AiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigInferenceTable;

AiGatewayModelProviderServiceConfigInferenceTable.builder()
    .parent(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .tableNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}. |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundry;

AiGatewayModelProviderServiceConfigMicrosoftFoundry.builder()
//  .direct(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect;

AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.builder()
//  .apiKey(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey)
//  .baseUrl(java.lang.String)
//  .entraServicePrincipal(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal)
//  .serviceCredential(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal">entraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">serviceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `entraServicePrincipal`<sup>Optional</sup> <a name="entraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal getEntraServicePrincipal();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

##### `serviceCredential`<sup>Optional</sup> <a name="serviceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential getServiceCredential();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey;

AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal;

AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.builder()
//  .clientId(java.lang.String)
//  .clientSecret(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret getClientSecret();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret;

AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential;

AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigOpenai <a name="AiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigOpenai;

AiGatewayModelProviderServiceConfigOpenai.builder()
//  .direct(AiGatewayModelProviderServiceConfigOpenaiDirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigOpenaiDirect getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirect <a name="AiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigOpenaiDirect;

AiGatewayModelProviderServiceConfigOpenaiDirect.builder()
//  .apiKey(AiGatewayModelProviderServiceConfigOpenaiDirectApiKey)
//  .baseUrl(java.lang.String)
//  .organization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigOpenaiDirectApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey;

AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.builder()
//  .plaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigRateLimits <a name="AiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigRateLimits;

AiGatewayModelProviderServiceConfigRateLimits.builder()
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
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests">requests</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">requestTagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">requestTagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}.

---

##### `requestTagKey`<sup>Optional</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```java
public java.lang.String getRequestTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}.

---

##### `requestTagValue`<sup>Optional</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```java
public java.lang.String getRequestTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}.

---

### AiGatewayModelProviderServiceConfigTargets <a name="AiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigTargets;

AiGatewayModelProviderServiceConfigTargets.builder()
    .model(java.lang.String)
//  .nativeApiTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">nativeApiTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}.

---

##### `nativeApiTypes`<sup>Optional</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```java
public java.util.List<java.lang.String> getNativeApiTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}.

---

### AiGatewayModelProviderServiceProviderConfig <a name="AiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceProviderConfig;

AiGatewayModelProviderServiceProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey">putSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretAccessKey` <a name="putSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey"></a>

```java
public void putSecretAccessKey(AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey"></a>

```java
public void resetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference getSecretAccessKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a>

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey getSecretAccessKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey">putAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">putServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey">resetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">resetServiceCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAccessKey` <a name="putAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey"></a>

```java
public void putAwsAccessKey(AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `putServiceCredential` <a name="putServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```java
public void putServiceCredential(AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `resetAwsAccessKey` <a name="resetAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey"></a>

```java
public void resetAwsAccessKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceCredential` <a name="resetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```java
public void resetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey">awsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">serviceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput">awsAccessKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">serviceCredentialInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccessKey`<sup>Required</sup> <a name="awsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference getAwsAccessKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a>

---

##### `serviceCredential`<sup>Required</sup> <a name="serviceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference getServiceCredential();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `awsAccessKeyInput`<sup>Optional</sup> <a name="awsAccessKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey getAwsAccessKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceCredentialInput`<sup>Optional</sup> <a name="serviceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential getServiceCredentialInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference;

new AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">resetDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigAmazonBedrockDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```java
public void resetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrock getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---


### AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference;

new AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirectApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference;

new AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```java
public void putApiKey(AiGatewayModelProviderServiceConfigAnthropicDirectApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirectApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---


### AiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicOutputReference;

new AiGatewayModelProviderServiceConfigAnthropicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">putRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">resetDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">resetRelayed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigAnthropicDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `putRelayed` <a name="putRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```java
public void putRelayed(AiGatewayModelProviderServiceConfigAnthropicRelayed value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```java
public void resetDirect()
```

##### `resetRelayed` <a name="resetRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```java
public void resetRelayed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">relayedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `relayed`<sup>Required</sup> <a name="relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference getRelayed();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `relayedInput`<sup>Optional</sup> <a name="relayedInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicRelayed getRelayedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropic getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---


### AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference;

new AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">resetPlanType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlanType` <a name="resetPlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```java
public void resetPlanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">planTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">planType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `planTypeInput`<sup>Optional</sup> <a name="planTypeInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```java
public java.lang.String getPlanTypeInput();
```

- *Type:* java.lang.String

---

##### `planType`<sup>Required</sup> <a name="planType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicRelayed getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---


### AiGatewayModelProviderServiceConfigAOutputReference <a name="AiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAOutputReference;

new AiGatewayModelProviderServiceConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">putAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">putAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">putAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">putGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">putInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">putMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai">putOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">resetAllowAllTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">resetAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">resetAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">resetAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">resetForwardQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">resetForwardUnmanagedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">resetGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">resetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">resetMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">resetOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">resetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonBedrock` <a name="putAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```java
public void putAmazonBedrock(AiGatewayModelProviderServiceConfigAmazonBedrock value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `putAnthropic` <a name="putAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```java
public void putAnthropic(AiGatewayModelProviderServiceConfigAnthropic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `putAzureOpenai` <a name="putAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```java
public void putAzureOpenai(AiGatewayModelProviderServiceConfigAzureOpenai value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `putCustom` <a name="putCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```java
public void putCustom(AiGatewayModelProviderServiceConfigCustom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---

##### `putGeminiEnterprise` <a name="putGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```java
public void putGeminiEnterprise(AiGatewayModelProviderServiceConfigGeminiEnterprise value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `putInferenceTable` <a name="putInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```java
public void putInferenceTable(AiGatewayModelProviderServiceConfigInferenceTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `putMicrosoftFoundry` <a name="putMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```java
public void putMicrosoftFoundry(AiGatewayModelProviderServiceConfigMicrosoftFoundry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `putOpenai` <a name="putOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```java
public void putOpenai(AiGatewayModelProviderServiceConfigOpenai value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```java
public void putRateLimits(IResolvable|java.util.List<AiGatewayModelProviderServiceConfigRateLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.List<AiGatewayModelProviderServiceConfigTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>>

---

##### `resetAllowAllTargets` <a name="resetAllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```java
public void resetAllowAllTargets()
```

##### `resetAmazonBedrock` <a name="resetAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```java
public void resetAmazonBedrock()
```

##### `resetAnthropic` <a name="resetAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```java
public void resetAnthropic()
```

##### `resetAzureOpenai` <a name="resetAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```java
public void resetAzureOpenai()
```

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```java
public void resetForwardHeaders()
```

##### `resetForwardQueryParameters` <a name="resetForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```java
public void resetForwardQueryParameters()
```

##### `resetForwardUnmanagedPaths` <a name="resetForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```java
public void resetForwardUnmanagedPaths()
```

##### `resetGeminiEnterprise` <a name="resetGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```java
public void resetGeminiEnterprise()
```

##### `resetInferenceTable` <a name="resetInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```java
public void resetInferenceTable()
```

##### `resetMicrosoftFoundry` <a name="resetMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```java
public void resetMicrosoftFoundry()
```

##### `resetOpenai` <a name="resetOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```java
public void resetOpenai()
```

##### `resetProviderType` <a name="resetProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```java
public void resetProviderType()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">amazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">azureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">geminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">inferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">microsoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">allowAllTargetsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">amazonBedrockInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">anthropicInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">azureOpenaiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">forwardQueryParametersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">forwardUnmanagedPathsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">geminiEnterpriseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">inferenceTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">microsoftFoundryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">openaiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">providerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">allowAllTargets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">forwardQueryParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">forwardUnmanagedPaths</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonBedrock`<sup>Required</sup> <a name="amazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```java
public AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference getAmazonBedrock();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `anthropic`<sup>Required</sup> <a name="anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```java
public AiGatewayModelProviderServiceConfigAnthropicOutputReference getAnthropic();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `azureOpenai`<sup>Required</sup> <a name="azureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference getAzureOpenai();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```java
public AiGatewayModelProviderServiceConfigCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `geminiEnterprise`<sup>Required</sup> <a name="geminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```java
public AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference getGeminiEnterprise();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `inferenceTable`<sup>Required</sup> <a name="inferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```java
public AiGatewayModelProviderServiceConfigInferenceTableOutputReference getInferenceTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `microsoftFoundry`<sup>Required</sup> <a name="microsoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference getMicrosoftFoundry();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `openai`<sup>Required</sup> <a name="openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```java
public AiGatewayModelProviderServiceConfigOpenaiOutputReference getOpenai();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```java
public AiGatewayModelProviderServiceConfigRateLimitsList getRateLimits();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```java
public AiGatewayModelProviderServiceConfigTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `allowAllTargetsInput`<sup>Optional</sup> <a name="allowAllTargetsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowAllTargetsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `amazonBedrockInput`<sup>Optional</sup> <a name="amazonBedrockInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrock getAmazonBedrockInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `anthropicInput`<sup>Optional</sup> <a name="anthropicInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAnthropic getAnthropicInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `azureOpenaiInput`<sup>Optional</sup> <a name="azureOpenaiInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenai getAzureOpenaiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigCustom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```java
public java.lang.Boolean|IResolvable getForwardHeadersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardQueryParametersInput`<sup>Optional</sup> <a name="forwardQueryParametersInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```java
public java.lang.Boolean|IResolvable getForwardQueryParametersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardUnmanagedPathsInput`<sup>Optional</sup> <a name="forwardUnmanagedPathsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```java
public java.lang.Boolean|IResolvable getForwardUnmanagedPathsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `geminiEnterpriseInput`<sup>Optional</sup> <a name="geminiEnterpriseInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterprise getGeminiEnterpriseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `inferenceTableInput`<sup>Optional</sup> <a name="inferenceTableInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigInferenceTable getInferenceTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `microsoftFoundryInput`<sup>Optional</sup> <a name="microsoftFoundryInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundry getMicrosoftFoundryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `openaiInput`<sup>Optional</sup> <a name="openaiInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigOpenai getOpenaiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```java
public java.lang.String getProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```java
public IResolvable|java.util.List<AiGatewayModelProviderServiceConfigRateLimits> getRateLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```java
public IResolvable|java.util.List<AiGatewayModelProviderServiceConfigTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>>

---

##### `allowAllTargets`<sup>Required</sup> <a name="allowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```java
public java.lang.Boolean|IResolvable getAllowAllTargets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```java
public java.lang.Boolean|IResolvable getForwardHeaders();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardQueryParameters`<sup>Required</sup> <a name="forwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```java
public java.lang.Boolean|IResolvable getForwardQueryParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardUnmanagedPaths`<sup>Required</sup> <a name="forwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```java
public java.lang.Boolean|IResolvable getForwardUnmanagedPaths();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```java
public void putClientSecret(AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference getClientSecret();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret getClientSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal">putEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">putServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal">resetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">resetServiceCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```java
public void putApiKey(AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `putEntraServicePrincipal` <a name="putEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal"></a>

```java
public void putEntraServicePrincipal(AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `putServiceCredential` <a name="putServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```java
public void putServiceCredential(AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetEntraServicePrincipal` <a name="resetEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal"></a>

```java
public void resetEntraServicePrincipal()
```

##### `resetServiceCredential` <a name="resetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```java
public void resetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal">entraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">serviceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput">entraServicePrincipalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">serviceCredentialInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `entraServicePrincipal`<sup>Required</sup> <a name="entraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference getEntraServicePrincipal();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a>

---

##### `serviceCredential`<sup>Required</sup> <a name="serviceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference getServiceCredential();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `entraServicePrincipalInput`<sup>Optional</sup> <a name="entraServicePrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal getEntraServicePrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `serviceCredentialInput`<sup>Optional</sup> <a name="serviceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential getServiceCredentialInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference;

new AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">resetDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigAzureOpenaiDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```java
public void resetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenai getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---


### AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference;

new AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirectApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigCustomDirectOutputReference;

new AiGatewayModelProviderServiceConfigCustomDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```java
public void putApiKey(AiGatewayModelProviderServiceConfigCustomDirectApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirectApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---


### AiGatewayModelProviderServiceConfigCustomOutputReference <a name="AiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigCustomOutputReference;

new AiGatewayModelProviderServiceConfigCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">resetDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigCustomDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```java
public void resetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigCustomDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigCustom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```java
public void putApiKey(AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">resetDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```java
public void resetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterprise getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---


### AiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="AiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigInferenceTableOutputReference;

new AiGatewayModelProviderServiceConfigInferenceTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```java
public void resetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">isDeleted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```java
public IResolvable getIsDeleted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```java
public java.lang.String getTableNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigInferenceTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```java
public void putClientSecret(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference getClientSecret();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret getClientSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal">putEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">putServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal">resetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">resetServiceCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```java
public void putApiKey(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `putEntraServicePrincipal` <a name="putEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal"></a>

```java
public void putEntraServicePrincipal(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `putServiceCredential` <a name="putServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```java
public void putServiceCredential(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetEntraServicePrincipal` <a name="resetEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal"></a>

```java
public void resetEntraServicePrincipal()
```

##### `resetServiceCredential` <a name="resetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```java
public void resetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal">entraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">serviceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput">entraServicePrincipalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">serviceCredentialInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `entraServicePrincipal`<sup>Required</sup> <a name="entraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference getEntraServicePrincipal();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a>

---

##### `serviceCredential`<sup>Required</sup> <a name="serviceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference getServiceCredential();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `entraServicePrincipalInput`<sup>Optional</sup> <a name="entraServicePrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal getEntraServicePrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `serviceCredentialInput`<sup>Optional</sup> <a name="serviceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential getServiceCredentialInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">resetDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```java
public void resetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---


### AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference;

new AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">resetPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaintext` <a name="resetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```java
public void resetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirectApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference;

new AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```java
public void putApiKey(AiGatewayModelProviderServiceConfigOpenaiDirectApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```java
public AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirectApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---


### AiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigOpenaiOutputReference;

new AiGatewayModelProviderServiceConfigOpenaiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">putDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">resetDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirect` <a name="putDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```java
public void putDirect(AiGatewayModelProviderServiceConfigOpenaiDirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `resetDirect` <a name="resetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```java
public void resetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">directInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```java
public AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference getDirect();
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `directInput`<sup>Optional</sup> <a name="directInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirect getDirectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigOpenai getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---


### AiGatewayModelProviderServiceConfigRateLimitsList <a name="AiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigRateLimitsList;

new AiGatewayModelProviderServiceConfigRateLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```java
public AiGatewayModelProviderServiceConfigRateLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayModelProviderServiceConfigRateLimits> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>>

---


### AiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="AiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigRateLimitsOutputReference;

new AiGatewayModelProviderServiceConfigRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">resetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">resetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```java
public void resetRequests()
```

##### `resetRequestTagKey` <a name="resetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```java
public void resetRequestTagKey()
```

##### `resetRequestTagValue` <a name="resetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```java
public void resetRequestTagValue()
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```java
public void resetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">requestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">requestTagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">requestTagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">tokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">requestTagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">requestTagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```java
public java.lang.String getRenewalPeriodInput();
```

- *Type:* java.lang.String

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```java
public java.lang.Number getRequestsInput();
```

- *Type:* java.lang.Number

---

##### `requestTagKeyInput`<sup>Optional</sup> <a name="requestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```java
public java.lang.String getRequestTagKeyInput();
```

- *Type:* java.lang.String

---

##### `requestTagValueInput`<sup>Optional</sup> <a name="requestTagValueInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```java
public java.lang.String getRequestTagValueInput();
```

- *Type:* java.lang.String

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```java
public java.lang.Number getTokensInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

---

##### `requestTagKey`<sup>Required</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```java
public java.lang.String getRequestTagKey();
```

- *Type:* java.lang.String

---

##### `requestTagValue`<sup>Required</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```java
public java.lang.String getRequestTagValue();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigRateLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>

---


### AiGatewayModelProviderServiceConfigTargetsList <a name="AiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigTargetsList;

new AiGatewayModelProviderServiceConfigTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get"></a>

```java
public AiGatewayModelProviderServiceConfigTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayModelProviderServiceConfigTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>>

---


### AiGatewayModelProviderServiceConfigTargetsOutputReference <a name="AiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceConfigTargetsOutputReference;

new AiGatewayModelProviderServiceConfigTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">resetNativeApiTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNativeApiTypes` <a name="resetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```java
public void resetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">nativeApiTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">nativeApiTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `nativeApiTypesInput`<sup>Optional</sup> <a name="nativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```java
public java.util.List<java.lang.String> getNativeApiTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `nativeApiTypes`<sup>Required</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```java
public java.util.List<java.lang.String> getNativeApiTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceConfigTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>

---


### AiGatewayModelProviderServiceProviderConfigOutputReference <a name="AiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.ai_gateway_model_provider_service.AiGatewayModelProviderServiceProviderConfigOutputReference;

new AiGatewayModelProviderServiceProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayModelProviderServiceProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---



