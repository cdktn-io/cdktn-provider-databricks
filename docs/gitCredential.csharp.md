# `gitCredential` Submodule <a name="`gitCredential` Submodule" id="@cdktn/provider-databricks.gitCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitCredential <a name="GitCredential" id="@cdktn/provider-databricks.gitCredential.GitCredential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential databricks_git_credential}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GitCredential(Construct Scope, string Id, GitCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig">GitCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig">GitCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetGitEmail">ResetGitEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetGitUsername">ResetGitUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetIsDefaultForProvider">ResetIsDefaultForProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetPersonalAccessToken">ResetPersonalAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.gitCredential.GitCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.gitCredential.GitCredential.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.gitCredential.GitCredential.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.gitCredential.GitCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.gitCredential.GitCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.gitCredential.GitCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.gitCredential.GitCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.gitCredential.GitCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.gitCredential.GitCredential.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.gitCredential.GitCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.gitCredential.GitCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.gitCredential.GitCredential.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.gitCredential.GitCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.gitCredential.GitCredential.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.gitCredential.GitCredential.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.gitCredential.GitCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.gitCredential.GitCredential.putProviderConfig"></a>

```csharp
private void PutProviderConfig(GitCredentialProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.gitCredential.GitCredential.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

---

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetGitEmail` <a name="ResetGitEmail" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetGitEmail"></a>

```csharp
private void ResetGitEmail()
```

##### `ResetGitUsername` <a name="ResetGitUsername" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetGitUsername"></a>

```csharp
private void ResetGitUsername()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDefaultForProvider` <a name="ResetIsDefaultForProvider" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetIsDefaultForProvider"></a>

```csharp
private void ResetIsDefaultForProvider()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPersonalAccessToken` <a name="ResetPersonalAccessToken" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetPersonalAccessToken"></a>

```csharp
private void ResetPersonalAccessToken()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetPrincipalId"></a>

```csharp
private void ResetPrincipalId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GitCredential resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.gitCredential.GitCredential.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GitCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.gitCredential.GitCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GitCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GitCredential.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GitCredential.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GitCredential resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GitCredential to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GitCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GitCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference">GitCredentialProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.forceInput">ForceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmailInput">GitEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProviderInput">GitProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsernameInput">GitUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProviderInput">IsDefaultForProviderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessTokenInput">PersonalAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.principalIdInput">PrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmail">GitEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProvider">GitProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsername">GitUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProvider">IsDefaultForProvider</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessToken">PersonalAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.principalId">PrincipalId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfig"></a>

```csharp
public GitCredentialProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference">GitCredentialProviderConfigOutputReference</a>

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.forceInput"></a>

```csharp
public bool|IResolvable ForceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GitEmailInput`<sup>Optional</sup> <a name="GitEmailInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmailInput"></a>

```csharp
public string GitEmailInput { get; }
```

- *Type:* string

---

##### `GitProviderInput`<sup>Optional</sup> <a name="GitProviderInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProviderInput"></a>

```csharp
public string GitProviderInput { get; }
```

- *Type:* string

---

##### `GitUsernameInput`<sup>Optional</sup> <a name="GitUsernameInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsernameInput"></a>

```csharp
public string GitUsernameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDefaultForProviderInput`<sup>Optional</sup> <a name="IsDefaultForProviderInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProviderInput"></a>

```csharp
public bool|IResolvable IsDefaultForProviderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PersonalAccessTokenInput`<sup>Optional</sup> <a name="PersonalAccessTokenInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessTokenInput"></a>

```csharp
public string PersonalAccessTokenInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.principalIdInput"></a>

```csharp
public double PrincipalIdInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfigInput"></a>

```csharp
public GitCredentialProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.force"></a>

```csharp
public bool|IResolvable Force { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GitEmail`<sup>Required</sup> <a name="GitEmail" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmail"></a>

```csharp
public string GitEmail { get; }
```

- *Type:* string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProvider"></a>

```csharp
public string GitProvider { get; }
```

- *Type:* string

---

##### `GitUsername`<sup>Required</sup> <a name="GitUsername" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsername"></a>

```csharp
public string GitUsername { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefaultForProvider`<sup>Required</sup> <a name="IsDefaultForProvider" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProvider"></a>

```csharp
public bool|IResolvable IsDefaultForProvider { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PersonalAccessToken`<sup>Required</sup> <a name="PersonalAccessToken" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessToken"></a>

```csharp
public string PersonalAccessToken { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.principalId"></a>

```csharp
public double PrincipalId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GitCredentialConfig <a name="GitCredentialConfig" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GitCredentialConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GitProvider,
    bool|IResolvable Force = null,
    string GitEmail = null,
    string GitUsername = null,
    string Id = null,
    bool|IResolvable IsDefaultForProvider = null,
    string Name = null,
    string PersonalAccessToken = null,
    double PrincipalId = null,
    GitCredentialProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitProvider">GitProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_provider GitCredential#git_provider}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#force GitCredential#force}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitEmail">GitEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_email GitCredential#git_email}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitUsername">GitUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_username GitCredential#git_username}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#id GitCredential#id}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.isDefaultForProvider">IsDefaultForProvider</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#name GitCredential#name}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.personalAccessToken">PersonalAccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.principalId">PrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#principal_id GitCredential#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitProvider"></a>

```csharp
public string GitProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_provider GitCredential#git_provider}.

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.force"></a>

```csharp
public bool|IResolvable Force { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#force GitCredential#force}.

---

##### `GitEmail`<sup>Optional</sup> <a name="GitEmail" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitEmail"></a>

```csharp
public string GitEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_email GitCredential#git_email}.

---

##### `GitUsername`<sup>Optional</sup> <a name="GitUsername" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitUsername"></a>

```csharp
public string GitUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_username GitCredential#git_username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#id GitCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefaultForProvider`<sup>Optional</sup> <a name="IsDefaultForProvider" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.isDefaultForProvider"></a>

```csharp
public bool|IResolvable IsDefaultForProvider { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#name GitCredential#name}.

---

##### `PersonalAccessToken`<sup>Optional</sup> <a name="PersonalAccessToken" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.personalAccessToken"></a>

```csharp
public string PersonalAccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}.

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.principalId"></a>

```csharp
public double PrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#principal_id GitCredential#principal_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.providerConfig"></a>

```csharp
public GitCredentialProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#provider_config GitCredential#provider_config}

---

### GitCredentialProviderConfig <a name="GitCredentialProviderConfig" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GitCredentialProviderConfig {
    string WorkspaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#workspace_id GitCredential#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#workspace_id GitCredential#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GitCredentialProviderConfigOutputReference <a name="GitCredentialProviderConfigOutputReference" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GitCredentialProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.internalValue"></a>

```csharp
public GitCredentialProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

---



