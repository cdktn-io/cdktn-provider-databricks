# `postgresDataApi` Submodule <a name="`postgresDataApi` Submodule" id="@cdktn/provider-databricks.postgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresDataApi <a name="PostgresDataApi" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApi(Construct Scope, string Id, PostgresDataApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig">PostgresDataApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig">PostgresDataApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig"></a>

```csharp
private void PutProviderConfig(PostgresDataApiProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec"></a>

```csharp
private void PutSpec(PostgresDataApiSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDataApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDataApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDataApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDataApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresDataApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig"></a>

```csharp
public PostgresDataApiProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec"></a>

```csharp
public PostgresDataApiSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status"></a>

```csharp
public PostgresDataApiStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput"></a>

```csharp
public IResolvable|PostgresDataApiProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput"></a>

```csharp
public IResolvable|PostgresDataApiSpec SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresDataApiConfig <a name="PostgresDataApiConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    PostgresDataApiProviderConfig ProviderConfig = null,
    PostgresDataApiSpec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig"></a>

```csharp
public PostgresDataApiProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec"></a>

```csharp
public PostgresDataApiSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}.

---

### PostgresDataApiProviderConfig <a name="PostgresDataApiProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}.

---

### PostgresDataApiSpec <a name="PostgresDataApiSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiSpec {
    bool|IResolvable DbAggregatesEnabled = null,
    string[] DbExtraSearchPath = null,
    double DbMaxRows = null,
    string[] DbSchemas = null,
    string JwtCacheMaxLifetime = null,
    string JwtRoleClaimKey = null,
    string OpenapiMode = null,
    string[] ServerCorsAllowedOrigins = null,
    bool|IResolvable ServerTimingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows">DbMaxRows</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas">DbSchemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode">OpenapiMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}. |

---

##### `DbAggregatesEnabled`<sup>Optional</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```csharp
public bool|IResolvable DbAggregatesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}.

---

##### `DbExtraSearchPath`<sup>Optional</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath"></a>

```csharp
public string[] DbExtraSearchPath { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}.

---

##### `DbMaxRows`<sup>Optional</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows"></a>

```csharp
public double DbMaxRows { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}.

---

##### `DbSchemas`<sup>Optional</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas"></a>

```csharp
public string[] DbSchemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}.

---

##### `JwtCacheMaxLifetime`<sup>Optional</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```csharp
public string JwtCacheMaxLifetime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}.

---

##### `JwtRoleClaimKey`<sup>Optional</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```csharp
public string JwtRoleClaimKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}.

---

##### `OpenapiMode`<sup>Optional</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode"></a>

```csharp
public string OpenapiMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}.

---

##### `ServerCorsAllowedOrigins`<sup>Optional</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```csharp
public string[] ServerCorsAllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}.

---

##### `ServerTimingEnabled`<sup>Optional</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled"></a>

```csharp
public bool|IResolvable ServerTimingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}.

---

### PostgresDataApiStatus <a name="PostgresDataApiStatus" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresDataApiProviderConfigOutputReference <a name="PostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresDataApiProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---


### PostgresDataApiSpecOutputReference <a name="PostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">ResetDbAggregatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath">ResetDbExtraSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows">ResetDbMaxRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas">ResetDbSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">ResetJwtCacheMaxLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">ResetJwtRoleClaimKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode">ResetOpenapiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">ResetServerCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled">ResetServerTimingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbAggregatesEnabled` <a name="ResetDbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```csharp
private void ResetDbAggregatesEnabled()
```

##### `ResetDbExtraSearchPath` <a name="ResetDbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```csharp
private void ResetDbExtraSearchPath()
```

##### `ResetDbMaxRows` <a name="ResetDbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```csharp
private void ResetDbMaxRows()
```

##### `ResetDbSchemas` <a name="ResetDbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```csharp
private void ResetDbSchemas()
```

##### `ResetJwtCacheMaxLifetime` <a name="ResetJwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```csharp
private void ResetJwtCacheMaxLifetime()
```

##### `ResetJwtRoleClaimKey` <a name="ResetJwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```csharp
private void ResetJwtRoleClaimKey()
```

##### `ResetOpenapiMode` <a name="ResetOpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```csharp
private void ResetOpenapiMode()
```

##### `ResetServerCorsAllowedOrigins` <a name="ResetServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```csharp
private void ResetServerCorsAllowedOrigins()
```

##### `ResetServerTimingEnabled` <a name="ResetServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```csharp
private void ResetServerTimingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">DbAggregatesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">DbExtraSearchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput">DbMaxRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput">DbSchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">JwtCacheMaxLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">JwtRoleClaimKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput">OpenapiModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">ServerCorsAllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">ServerTimingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows">DbMaxRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas">DbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode">OpenapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbAggregatesEnabledInput`<sup>Optional</sup> <a name="DbAggregatesEnabledInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```csharp
public bool|IResolvable DbAggregatesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbExtraSearchPathInput`<sup>Optional</sup> <a name="DbExtraSearchPathInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```csharp
public string[] DbExtraSearchPathInput { get; }
```

- *Type:* string[]

---

##### `DbMaxRowsInput`<sup>Optional</sup> <a name="DbMaxRowsInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```csharp
public double DbMaxRowsInput { get; }
```

- *Type:* double

---

##### `DbSchemasInput`<sup>Optional</sup> <a name="DbSchemasInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```csharp
public string[] DbSchemasInput { get; }
```

- *Type:* string[]

---

##### `JwtCacheMaxLifetimeInput`<sup>Optional</sup> <a name="JwtCacheMaxLifetimeInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```csharp
public string JwtCacheMaxLifetimeInput { get; }
```

- *Type:* string

---

##### `JwtRoleClaimKeyInput`<sup>Optional</sup> <a name="JwtRoleClaimKeyInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```csharp
public string JwtRoleClaimKeyInput { get; }
```

- *Type:* string

---

##### `OpenapiModeInput`<sup>Optional</sup> <a name="OpenapiModeInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```csharp
public string OpenapiModeInput { get; }
```

- *Type:* string

---

##### `ServerCorsAllowedOriginsInput`<sup>Optional</sup> <a name="ServerCorsAllowedOriginsInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```csharp
public string[] ServerCorsAllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ServerTimingEnabledInput`<sup>Optional</sup> <a name="ServerTimingEnabledInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```csharp
public bool|IResolvable ServerTimingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbAggregatesEnabled`<sup>Required</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```csharp
public bool|IResolvable DbAggregatesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbExtraSearchPath`<sup>Required</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```csharp
public string[] DbExtraSearchPath { get; }
```

- *Type:* string[]

---

##### `DbMaxRows`<sup>Required</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```csharp
public double DbMaxRows { get; }
```

- *Type:* double

---

##### `DbSchemas`<sup>Required</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```csharp
public string[] DbSchemas { get; }
```

- *Type:* string[]

---

##### `JwtCacheMaxLifetime`<sup>Required</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```csharp
public string JwtCacheMaxLifetime { get; }
```

- *Type:* string

---

##### `JwtRoleClaimKey`<sup>Required</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```csharp
public string JwtRoleClaimKey { get; }
```

- *Type:* string

---

##### `OpenapiMode`<sup>Required</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode"></a>

```csharp
public string OpenapiMode { get; }
```

- *Type:* string

---

##### `ServerCorsAllowedOrigins`<sup>Required</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```csharp
public string[] ServerCorsAllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ServerTimingEnabled`<sup>Required</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```csharp
public bool|IResolvable ServerTimingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresDataApiSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---


### PostgresDataApiStatusOutputReference <a name="PostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDataApiStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas">AvailableSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows">DbMaxRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas">DbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode">OpenapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSchemas`<sup>Required</sup> <a name="AvailableSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```csharp
public string[] AvailableSchemas { get; }
```

- *Type:* string[]

---

##### `DbAggregatesEnabled`<sup>Required</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```csharp
public IResolvable DbAggregatesEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DbExtraSearchPath`<sup>Required</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```csharp
public string[] DbExtraSearchPath { get; }
```

- *Type:* string[]

---

##### `DbMaxRows`<sup>Required</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```csharp
public double DbMaxRows { get; }
```

- *Type:* double

---

##### `DbSchemas`<sup>Required</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```csharp
public string[] DbSchemas { get; }
```

- *Type:* string[]

---

##### `JwtCacheMaxLifetime`<sup>Required</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```csharp
public string JwtCacheMaxLifetime { get; }
```

- *Type:* string

---

##### `JwtRoleClaimKey`<sup>Required</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```csharp
public string JwtRoleClaimKey { get; }
```

- *Type:* string

---

##### `OpenapiMode`<sup>Required</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode"></a>

```csharp
public string OpenapiMode { get; }
```

- *Type:* string

---

##### `ServerCorsAllowedOrigins`<sup>Required</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```csharp
public string[] ServerCorsAllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ServerTimingEnabled`<sup>Required</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```csharp
public IResolvable ServerTimingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue"></a>

```csharp
public PostgresDataApiStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a>

---



