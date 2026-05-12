# `servicePrincipalSecret` Submodule <a name="`servicePrincipalSecret` Submodule" id="@cdktn/provider-databricks.servicePrincipalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalSecret <a name="ServicePrincipalSecret" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret databricks_service_principal_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ServicePrincipalSecret(Construct Scope, string Id, ServicePrincipalSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig">ServicePrincipalSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig">ServicePrincipalSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetLifetime">ResetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecretHash">ResetSecretHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetTimeRotating">ResetTimeRotating</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.putProviderConfig"></a>

```csharp
private void PutProviderConfig(ServicePrincipalSecretProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a>

---

##### `ResetApi` <a name="ResetApi" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetApi"></a>

```csharp
private void ResetApi()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetCreateTime"></a>

```csharp
private void ResetCreateTime()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetLifetime"></a>

```csharp
private void ResetLifetime()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSecretHash` <a name="ResetSecretHash" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecretHash"></a>

```csharp
private void ResetSecretHash()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeRotating` <a name="ResetTimeRotating" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetTimeRotating"></a>

```csharp
private void ResetTimeRotating()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetUpdateTime"></a>

```csharp
private void ResetUpdateTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicePrincipalSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ServicePrincipalSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ServicePrincipalSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ServicePrincipalSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ServicePrincipalSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicePrincipalSecret resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicePrincipalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference">ServicePrincipalSecretProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTimeInput">CreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHashInput">SecretHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotatingInput">TimeRotatingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTimeInput">UpdateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHash">SecretHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotating">TimeRotating</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.providerConfig"></a>

```csharp
public ServicePrincipalSecretProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference">ServicePrincipalSecretProviderConfigOutputReference</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTimeInput"></a>

```csharp
public string CreateTimeInput { get; }
```

- *Type:* string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.providerConfigInput"></a>

```csharp
public ServicePrincipalSecretProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a>

---

##### `SecretHashInput`<sup>Optional</sup> <a name="SecretHashInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHashInput"></a>

```csharp
public string SecretHashInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeRotatingInput`<sup>Optional</sup> <a name="TimeRotatingInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotatingInput"></a>

```csharp
public string TimeRotatingInput { get; }
```

- *Type:* string

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTimeInput"></a>

```csharp
public string UpdateTimeInput { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `SecretHash`<sup>Required</sup> <a name="SecretHash" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHash"></a>

```csharp
public string SecretHash { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeRotating`<sup>Required</sup> <a name="TimeRotating" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotating"></a>

```csharp
public string TimeRotating { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalSecretConfig <a name="ServicePrincipalSecretConfig" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ServicePrincipalSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServicePrincipalId,
    string Api = null,
    string CreateTime = null,
    string ExpireTime = null,
    string Id = null,
    string Lifetime = null,
    ServicePrincipalSecretProviderConfig ProviderConfig = null,
    string Secret = null,
    string SecretHash = null,
    string Status = null,
    string TimeRotating = null,
    string UpdateTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.api">Api</a></code> | <code>string</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.createTime">CreateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.expireTime">ExpireTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secretHash">SecretHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.timeRotating">TimeRotating</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}.

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#api ServicePrincipalSecret#api}

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.createTime"></a>

```csharp
public string CreateTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}.

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.providerConfig"></a>

```csharp
public ServicePrincipalSecretProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#provider_config ServicePrincipalSecret#provider_config}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}.

---

##### `SecretHash`<sup>Optional</sup> <a name="SecretHash" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secretHash"></a>

```csharp
public string SecretHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}.

---

##### `TimeRotating`<sup>Optional</sup> <a name="TimeRotating" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.timeRotating"></a>

```csharp
public string TimeRotating { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}.

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}.

---

### ServicePrincipalSecretProviderConfig <a name="ServicePrincipalSecretProviderConfig" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ServicePrincipalSecretProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#workspace_id ServicePrincipalSecret#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal_secret#workspace_id ServicePrincipalSecret#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalSecretProviderConfigOutputReference <a name="ServicePrincipalSecretProviderConfigOutputReference" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ServicePrincipalSecretProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfigOutputReference.property.internalValue"></a>

```csharp
public ServicePrincipalSecretProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretProviderConfig">ServicePrincipalSecretProviderConfig</a>

---



